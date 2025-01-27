/** @odoo-module **/

import { registry } from '@web/core/registry'
import { useService } from '@web/core/utils/hooks'

const { Component, useState, onWillStart } = owl

export class OwlVersionDashboard extends Component {
  setup() {
    this.state = useState({
      title: '',
      information: [],
      countModules: []
    })

    this.orm = useService('orm')

    onWillStart(async () => {
      console.log('onWillStart')
      this.state.title = 'Versions'
    })
  }

}

OwlVersionDashboard.template = 'owl.OwlVersionDashboard'

registry.category('actions').add('owl.version_dashboard', OwlVersionDashboard)
