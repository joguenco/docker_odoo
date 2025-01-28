import {registry} from "@web/core/registry"
import {useService} from "@web/core/utils/hooks"

const {Component, useState, onWillStart} = owl

export class OwlVersionDashboard extends Component {
    setup() {
        this.state = useState({
            title: "",
            version: {},
        })

        this.orm = useService("orm")

        onWillStart(async () => {
            this.state.title = "Versions"
            this.state.version = await this.getVersion()
        })
    }

    async getVersion() {
        try {
            const result = await this.orm.searchRead("version.version", [])

            return {
                versionOdoo: result[0].version_odoo,
                versionDatabase: result[0].version_database,
                versionPython: result[0].version_python,
                versionOS: result[0].version_os,
            }
        } catch {
            return {
                versionOdoo: "",
                versionDatabase: "",
                versionPython: "",
                versionOS: "",
            }
        }
    }
}

OwlVersionDashboard.template = "owl.OwlVersionDashboard"

registry.category("actions").add("owl.version_dashboard", OwlVersionDashboard)
