1. DEVELOPMENT

# 1. Khởi tạo
npx prisma init

# Cấu hình DATABASE_URL trong .env cho dev

# 2. Tạo schema ban đầu

# Chỉnh sửa prisma/schema.prisma

# 3. Tạo migration đầu tiên
npx prisma migrate dev --name init

# 4. Khi thay đổi schema
npx prisma migrate dev --create-only --name change_description

# Review migration file trong prisma/migrations/

# 5. Test migration

npx prisma migrate reset --skip-generate # Reset DB dev xoá dữ liệu db
npx prisma migrate dev # Apply migrations

2. PRODUCTION

# 1. Backup trước khi deploy
pg*dump -U username -d database > backup*$(date +%Y%m%d).sql

# 2. Deploy migrations an toàn
npx prisma generate
npx prisma migrate deploy # Chỉ apply migrations chưa được apply

# 3. Kiểm tra status
npx prisma migrate status

# 4. Nếu có lỗi - Rollback
psql -U username -d database < backup_file.sql
