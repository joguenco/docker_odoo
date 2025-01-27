# -*- coding: utf-8 -*-
# from odoo import http


# class GetVersion(http.Controller):
#     @http.route('/get_version/get_version', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/get_version/get_version/objects', auth='public')
#     def list(self, **kw):
#         return http.request.render('get_version.listing', {
#             'root': '/get_version/get_version',
#             'objects': http.request.env['get_version.get_version'].search([]),
#         })

#     @http.route('/get_version/get_version/objects/<model("get_version.get_version"):obj>', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('get_version.object', {
#             'object': obj
#         })

