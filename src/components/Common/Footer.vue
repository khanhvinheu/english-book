<template>
  <div class="footer__top">
    <div class="footer__top-item">
      <ul class="footer__top-list">
        <li class="footer__top-lits-item">
          <el-avatar
            shape="square"
            :size="40"
            fit="fill"
            :src="$appSetting.LOGO_APP"
            id="logo__footer"         
          />
          <h3 class="footer__top_list-title">{{$appSetting.NAME_APP}}</h3>
        </li>
        <li class="footer__top-lits-item">Điện thoại: 0868.350.979</li>
        <li class="footer__top-lits-item">Email: vinh.khanhdu@gmail.com</li>
        <li class="footer__top-lits-item">Địa chỉ: Trà Vinh, TP Trà Vinh</li>
      </ul>
    </div>
    <div class="footer__top-item">
      <ul class="footer__top-list">
        <li class="footer__top-lits-item">
          <h3 class="footer__top_list-title">Về {{$appSetting.NAME_APP}}</h3>
        </li>
        <li class="footer__top-lits-item">Giới thiệu</li>
        <li class="footer__top-lits-item">Cơ hội</li>
        <li class="footer__top-lits-item">Ý tưởng thực hiện</li>
      </ul>
    </div>
    <div class="footer__top-item">
      <ul class="footer__top-list">
        <li class="footer__top-lits-item">
          <h3 class="footer__top_list-title">Hỗ trợ</h3>
        </li>
        <li class="footer__top-lits-item">Liên kết</li>
        <li class="footer__top-lits-item">Bảo mật</li>
        <li class="footer__top-lits-item">Điều khoản</li>
      </ul>
    </div>
    <div class="footer__top-item">
      <ul class="footer__top-list">
        <li class="footer__top-lits-item">
          <h3 class="footer__top_list-title">Website {{$appSetting.NAME_APP}}</h3>
        </li>
        <li class="footer__top-lits-item">Ngày bắt đầu: 20/4/2022</li>
        <li class="footer__top-lits-item">Lĩnh vực: Thương mại</li>
        <li class="footer__top-lits-item">Version: 1.0.0</li>
      </ul>
    </div>
  </div>
  <div class="footer__bottom">
    <span>
      {{$appSetting.FOOTER_APP}}
    </span>
      <div class="icon_footer">
        <ion-icon name="logo-youtube" class="icon_footer-item"></ion-icon> 
        <ion-icon name="logo-facebook" class="icon_footer-item"></ion-icon>
        <ion-icon name="logo-tiktok" class="icon_footer-item"></ion-icon>
      </div>
  </div>
</template>
<style>
     @import '../../assets/scss/footer.scss';
</style>