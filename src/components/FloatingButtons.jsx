import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function FloatingButtons() {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="+60168507347"
        accountName="Fit2Shape"
        allowEsc
        allowClickAway
        notification
        notificationSound
        avatar="https://scontent.fkul5-3.fna.fbcdn.net/v/t39.30808-6/361085618_783355160247150_4801814866873984955_n.png?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFp92OC-e5HreWK8vdhVGLIzbb2f9g_H6XNtvZ_2D8fpUxBT14YqQOaTZnFnGdeu8P0yDfkeITFQmoTenQb3MWh&_nc_ohc=BRmRL7gm9WcAX_b3-R2&_nc_zt=23&_nc_ht=scontent.fkul5-3.fna&oh=00_AfAANb6RJFR2xxKubwFl9pxXBCWQTxkG14To-iRHOj8y0w&oe=64C32161"
      />
    </div>
  );
}
