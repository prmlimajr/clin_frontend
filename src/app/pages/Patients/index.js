import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import DataCard from '../../components/DataCard';
import ChevronLeft from '../../../assets/img/chevron-left.svg';
import Search from '../../../assets/img/search.svg';
import Plus from '../../../assets/img/plus.svg';
import PlusCircle from '../../../assets/img/plus-circle.svg';

import './Patients.css';

import { getPatients } from '../../../api/patients';

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

  render() {
    console.log(this.state);
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
              onChange={this.onSearchChange}
            />
            <button onClick={() => this.addPatient()}>
              <img src={Plus} alt='Cadastrar' /> CADASTRAR
            </button>
          </div>
        </div>

        <div className='data'>
          {patients.map((patient) => {
            return (
              <DataCard
                key={patient.id}
                name={patient.name}
                birthday={patient.birthday}
                age={patient.age}
                gender={patient.gender}
              />
            );
          })}
          <button onClick={() => this.onClickIncreaseListLimit()}>
            <img src={PlusCircle} alt='Ver mais' />
          </button>
        </div>
      </>
    );
  }
}

export default Patients;
