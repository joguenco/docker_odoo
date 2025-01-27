# -*- coding: utf-8 -*-

# from odoo import models, fields, api


# class get_version(models.Model):
#     _name = 'get_version.get_version'
#     _description = 'get_version.get_version'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         for record in self:
#             record.value2 = float(record.value) / 100

