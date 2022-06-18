//click vào div web-info-button nào thì hiện div con info-content của div đó
$(document).ready(function () {
    $('.web-info-button').click(function (e) { 
        e.preventDefault();
        $(this).find('.info-content').toggle('show');
        $(this).siblings().toggle('hide');
    });
    //click vào nút navigation thì div navbar hiện ra, phần còn lại màn hình tối lại
    $('.nav-icon').click(function (e) { 
        e.preventDefault();
        $('.navbar').addClass('active');
        $('.cover').addClass('active');
    });
    //click vào vùng đen ngoài div navbar để thoát
    $('.cover').click(function (e) { 
        e.preventDefault();
        $('.navbar').removeClass('active');
        $('.cover').removeClass('active');
    });
});