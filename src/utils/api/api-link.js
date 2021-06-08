const domain='http://103.114.104.246:7586';
//const domain='https://localhost:44381';

export const LinkApi={
    login:domain+'/api/login',
    order_getall:domain+'/api/orders/getall', 
    order_getBydate:domain+'/api/orders/getbydate?date=',
    order_getByOrderId:domain+'/api/pay/getbyorderid?orderid=',
    order_getTongDoanhThuNgay:domain+'/api/pay/gettongdoanhthungay',
    order_GetTongThuNgay:domain+'/api/pay/gettongthungay',
    order_GetTongThuTienMatNgay:domain+'/api/pay/gettongthutienmatngay',
    order_getAllConNo:domain+'/api/orders/getbyconno?isconno=0',
    order_getLichSu:domain+'/api/orders/getbycode?code=',

    customers_getall:domain+'/api/customer/getall', 
    customer_del:domain+'/api/customer/delete?id=',
    customer_add:domain+'/api/customer/add?',
    customer_update:domain+'/api/customer/update',

    order_add:domain+'/api/orders/add?',
    order_update:domain+'/api/orders/update?',
    pay_add:domain+'/api/pay/add?',
    pay_update:domain+'/api/pay/update?',
    order_del:domain+'/api/orders/delete?id=',

    chi_getTongChiNgay:domain+'/api/pay/gettongchingay',
    chi_getTongChiNgayTienMatCongTy:domain+'/api/pay/gettongchitienmatngay',
    chi_getall:domain+'/api/chi/getall',
    chi_add:domain+'/api/chi/add?',
    chi_del:domain+'/api/chi/delete?id=',
    chi_getbydate:domain+'/api/chi/getbydate?date=',

    bangiaotien_del:domain+'/api/bangiaotien/delete?id=',
    bangiaotien_add:domain+'/api/bangiaotien/add?',

    mawb_getall:domain+'/api/exp/exportmawb/getall',
    mawb_add:domain+'/api/exp/exportmawb/add',
    mawb_findbyId:domain+'/api/exp/exportmawb/findbyid/',
    mawb_update:domain+'/api/exp/exportmawb/update',
    mawb_delete:domain+'/api/exp/exportmawb/delete/',

    hawb_getall:domain+'/api/exp/exporthawb/getall',
    hawb_add:domain+'/api/exp/exporthawb/add',
    hawb_findbyId:domain+'/api/exp/exporthawb/findbyid/',
    hawb_update:domain+'/api/exp/exporthawb/update',
    hawb_delete:domain+'/api/exp/exporthawb/delete/',

    exporthawbrate_findbyId:domain+'/api/exp/exporthawbrate/findbyid/',
    exporthawbrate_add:domain+'/api/exp/exporthawbrate/add',

    exporthawbsale_findbyId:domain+'/api/exp/exporthawbsale/findbyid/',
    exporthawbsale_add:domain+'/api/exp/exporthawbsale/add',

    goodsinformation_findbyId:domain+'/api/exp/goodsinformation/findbyid/',
    goodsinformation_add:domain+'/api/exp/goodsinformation/add',

    naturegoods_findbyId:domain+'/api/exp/naturegoods/findbyid/',
    naturegoods_add:domain+'/api/exp/naturegoods/add',

    routing_findbyId:domain+'/api/exp/routing/findbyid/',
    routing_add:domain+'/api/exp/routing/add',



    shipper_getbyId:domain+'/api/category/shipper/findbyid/',
    shipper_getall:domain+'/api/category/shipper/getall',

    cnee_getbyId:domain+'/api/category/consignee/findbyid/',
    cnee_getall:domain+'/api/category/consignee/getall',

    agent_findbyId:domain+'/api/category/agent/findbyid/',
    agent_getall:domain+'/api/category/agent/getall',

    airline_findbyId:domain+'/api/category/airline/findbyid/',
    airline_getall:domain+'/api/category/airline/getall',

    airport_findbyId:domain+'/api/category/airport/findbyid/',
    airport_getall:domain+'/api/category/airport/getall',

};

