import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

import DataCard from '../../components/DataCard';
import ChevronLeft from '../../../assets/img/chevron-left.svg';
import Search from '../../../assets/img/search.svg';
import Plus from '../../../assets/img/plus.svg';
import PlusCircle from '../../../assets/img/plus-circle.svg';

import './Patients.css';

import { getPatients, deletePatient } from '../../../api/patients';

class Patients extends Component {
  state = {
    search: '',
    page: 1,
    perPage: 15,
    patients: [],
  };

  onSearchChange = (e) => {
    this.setState({
      search: e.target.value,
    });
    this.callSearch(e.target.value);
  };

  callSearch = async (value) => {
    const { page, perPage } = this.state;

    const patients = await getPatients({ search: value, page: 1, perPage });

    this.setState({
      patients,
    });
  };

  onClickIncreaseListLimit = async () => {
    const listParams = this.state;

    const page = listParams.page + 1;

    const newPatients = await getPatients({
      ...listParams,
      page: listParams.page + 1,
    });

    this.setState({
      patients: [...this.state.patients, ...newPatients],
      page,
    });
    console.log(this.state.patients);
  };

  componentDidMount = async () => {
    const { search, page, perPage } = this.state;

    const patients = await getPatients({ search, page, perPage });

    this.setState({
      patients,
    });
  };

  addPatient = () => {
    this.props.history.push('/patient-register');
  };

  handleDelete = async (id) => {
    await deletePatient(id);

    const { search, page, perPage } = this.state;

    const patients = await getPatients({ search, page, perPage });

    this.setState({
      patients,
    });
  };

  render() {
    console.log(this.state.patients);
    const { patients } = this.state;
    return (
      <>
        <div className='patients'>
          <div className='patientsTitle'>
            <Link to='/main' className='back'>
              <img src={ChevronLeft} alt='Voltar' />
              <h1>PACIENTES</h1>
            </Link>
          </div>
          <div className='searchBar'>
            <img src={Search} alt='Buscar' className='inputSearch' />
            <input
              type='text'
              className='search'
              placeholder='Buscar'
              onChange={this.onSearchChange}
            />
            <Button
              logo={Plus}
              handleClick={() => this.addPatient()}
              content='CADASTRAR'
            />
          </div>
        </div>

        <div className='data'>
          {patients.map((patient) => {
            return (
              <div className='row'>
                <DataCard
                  key={patient.id}
                  name={patient.name}
                  birthday={patient.birthday}
                  doctor={patient.doctor}
                  age={patient.age}
                  gender={patient.gender}
                  handleEdit={() =>
                    this.props.history.push(`/patients/${patient.id}`)
                  }
                  handleDelete={() => this.handleDelete(patient.id)}
                />
              </div>
            );
          })}
          <button onClick={() => this.onClickIncreaseListLimit()}>
            <img src={PlusCircle} alt='Ver mais' /> Ver mais
          </button>
        </div>
      </>
    );
  }
}

export default Patients;
