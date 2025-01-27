{
    "name": "Get Version",
    "summary": "Get version of database, python, kernel, odoo, etc.",
    "category": "Demo",
    "author": "Odoo Community Association (OCA), Jorge Luis ",
    "website": "https://joguenco.dev",
    "license": "AGPL-3",
    "version": "18.0.1.0.0",
    "depends": ["base", "web"],
    "data": [
        "security/ir.model.access.csv",
        "views/version_dashboard.xml",
    ],
    "installable": True,
    "application": True,
    "assets": {
        "web.assets_backend": [
            "get_version/static/src/components/**/*.js",
            "get_version/static/src/components/**/*.xml",
        ],
    },
}
