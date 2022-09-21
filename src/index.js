import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import '@laylazi/bootstrap-rtl/dist/css/bootstrap-rtl.min.css';
import './css/style.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/js/all.min'

$ (function () {
    $('[data-toggle="tooltip"]').tooltip();

   $('.add-to-card-btn').click(function(){
    alert('تمت الاضافه الي عربه الشراء');
   });
   $("#copyright").text('جميع الحقوق محفوظه لسنة '+ new Date().getFullYear());

   $('.product-option input[type="radio"]').change(function(){
        $(this).parents('.product-option').siblings().removeClass('active');
        $(this).parents('.product-option').addClass('active');

   });
  });

