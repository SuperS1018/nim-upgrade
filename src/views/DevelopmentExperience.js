import React, { Component } from 'react'
import '../stylesheets/views/DevelopmnetExperience.css'

class DevelopmentExperience extends Component {
  render () {
    const DevelopmentTools = (...props) => {
      return (
        <>
          <h2 className='w-100'>Development Tools</h2>
          <ol className='pl-5 pr-5'>
            <li>
              <div className='row'>
                <div className='col-lg-12 '>
                  Nimbella Workbench - a rich terminal experience from the browser
                </div>
                <div className='col-lg-12'>
                  <img src='images/uploads/nimbella-workbench1.jpg' alt='Nimbella Workbench 1' className='Content--Image w50' />
                </div>
                <div className='col-md-4'>
                  <img src='images/uploads/nimbella-workbench-2-1.jpg' alt='Nimbella Workbench 2-1' className='Content--Image w100' />
                </div>
                <div className='col-md-4'>
                  <img src='images/uploads/nimbella-workbench-2-2.jpg' alt='Nimbella Workbench 2-2' className='Content--Image w100' />
                </div>
                <div className='col-lg-12'>
                  <img src='images/uploads/nimbella-workbench3.jpg' alt='Nimbella Workbench 3' className='Content--Image w50' />
                </div>
                <div className='col-lg-12'>
                  <img src='images/uploads/nimbella-workbench4.jpg' alt='Nimbella Workbench 4' className='Content--Image w50' />
                </div>
              </div>
            </li>
            <li>
              <div className='row'>
                <div className='col-lg-12 '>
                  Using GitHub actions - Deploy a project to Nimbella Platform
                </div>
                <div className='col-lg-12'>
                  <img src='images/uploads/deploy-project-nimbella-platform1.jpg' alt='Deploy a project to Nimbella Platform 1' className='Content--Image w50' />
                </div>
                <div className='col-md-12'>
                  <img src='images/uploads/deploy-project-nimbella-platform2.jpg' alt='Deploy a project to Nimbella Platform 2' className='Content--Image w50' />
                </div>
                <div className='col-lg-12'>
                  <img src='images/uploads/deploy-project-nimbella-platform3.jpg' alt='Deploy a project to Nimbella Platform 3' className='Content--Image w50' />
                </div>
              </div>
            </li>
            <li>
              <div className='row'>
                <div className='col-lg-12 '>
                  Nimbella - Netlify Plugin - developers can use Netlify CI/CD to deploy on Nimbella
                </div>
                <div className='col-lg-12'>
                  <img src='images/uploads/netlify-ci-cd-deploy-nimbella-project.jpg' alt='Use Netlify CI/CD to deploy on Nimbella' className='Content--Image w50' />
                </div>
              </div>
            </li>
          </ol>
        </>
      )
    }

    const DataStorage = (...props) => {
      return (
        <>
          <div className='col-lg-12'>
            <h2 className='w-100'>Data Storage for State Management</h2>
            <p>Example: a declarative approach to state management in different languages</p>
          </div>
          <div className='col-lg-12'>
            <img src='images/uploads/data-storage-state-management.jpg' alt='Data storage for state management example' className='Content--Image w50' />
          </div>
        </>
      )
    }

    const LocalDevelopment = (...props) => {
      return (
        <>
          <div className='col-lg-12'>
            <h2 className='w-100'>Local and Offline Development</h2>
            <p>Using Nimbella local cloud and Postman tool to develop and test APIs locally and offline</p>
          </div>
          <div className='col-lg-12'>
            <img src='images/uploads/local-development1.jpg' alt='Using Nimbella local cloud and Postman tool 1' className='Content--Image w50' />
          </div>
          <div className='col-lg-12'>
            <img src='images/uploads/local-development2.jpg' alt='Using Nimbella local cloud and Postman tool 2' className='Content--Image w50' />
          </div>
          <div className='col-lg-12'>
            <img src='images/uploads/local-development3.jpg' alt='Using Nimbella local cloud and Postman tool 3' className='Content--Image w50' />
          </div>
          <div className='col-lg-12'>
            <img src='images/uploads/local-development4.jpg' alt='Using Nimbella local cloud and Postman tool 4' className='Content--Image w50' />
          </div>
        </>
      )
    }

    const { title } = this.props
    return (
      <div className='DevelopmentExperience page'>
        <div className='container section'>
          <div className='row'>
            {title === 'Development Tools' && <DevelopmentTools />}
            {title === 'Data Storage' && <DataStorage />}
            {title === 'Local Development' && <LocalDevelopment />}
          </div>
        </div>
      </div>
    )
  }
}

export default DevelopmentExperience
