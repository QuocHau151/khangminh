import Image from "next/image";
import React from "react";

export default function GioiThieu() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image src="/assets/images/123.png" alt="" width={500} height={500} />
      <div className="font-bold">
        Website đang nâng cấp, vui lòng liên hệ 0399603123
      </div>
    </div>
  );
}
