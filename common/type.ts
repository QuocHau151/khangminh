export type UserType = {
  email: string;
  name: string;
  phone: string;
  address: string;
};

export type ProductType = {
  id: string;
  ten_san_pham: string;
  so_luong: number;
  gia_san_pham: number;
  mo_ta_san_pham: string;
  hinh_anh: string[];
  cong_suat: string;
  kich_thuoc: string;
  vo_mau: string;
  chat_lieu: string;
  che_do_mau: string;
  bao_hanh: string;
  thuoc_tinh_khac: JSON;
  id_danh_muc: string;
  danh_muc: string[];
};
