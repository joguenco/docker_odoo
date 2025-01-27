/** @odoo-module **/

import { registry } from "@web/core/registry"
import { useService } from "@web/core/utils/hooks"

const { Component, useState, onWillStart } = owl

export class OwlVersionDashboard extends Component {
    setup() {
        this.state = useState({
            title: "",
            countModules: [],
            version: {},
        })

        this.orm = useService("orm")

        onWillStart(async () => {
            this.state.title = "Versions"
            this.state.version = await this.getVersion()
        })
    }

    async getVersion() {
        const result = await this.orm.searchRead("version.version", [])

        if (result.length > 0) {
            return {
                name: result[0].name,
                versionOdoo: result[0].version_odoo,
                versionDatabase: result[0].version_database,
                versionPython: result[0].version_python,
                versionOS: result[0].version_os,
            }
        }

        return {
            name: "",
            versionOdoo: "",
            versionDatabase: "",
            versionPython: "",
            versionOS: "",
        }
    }
}

OwlVersionDashboard.template = "owl.OwlVersionDashboard"

registry.category("actions").add("owl.version_dashboard", OwlVersionDashboard)
