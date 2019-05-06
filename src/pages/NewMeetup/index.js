import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { FaCamera } from 'react-icons/fa';
import { toastr } from 'react-redux-toastr';

import MeetupsActions from '../../store/ducks/meetups';

import Header from '../../components/Header';

import {
  Container,
  Box,
  Button,
  CheckBox,
  Preferences,
  ImagesArea,
  File,
  Drop,
} from './styles';

class NewMeetup extends Component {
  static propTypes = {
    meetupCreateRequest: PropTypes.func.isRequired,
  };

  state = {
    title: '',
    description: '',
    image: [],
    place: '',
    category: '',
  }

  onFilesChange = (files) => {
    this.setState({ image: files });
  };

  onFilesError = (error) => {
    if (error.code === 4) {
      toastr.warning('Atenção', 'Somente uma imagem');
    }

    if (error.code === 1) {
      toastr.warning('Atenção', 'Formato não suportado | Somente JPEG e PNG');
    }
  };

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      title, description, place, image, category,
    } = this.state;

    const { meetupCreateRequest } = this.props;

    meetupCreateRequest(title, description, place, image, category);
  }

  render() {
    const {
      image,
    } = this.state;

    return (
      <Container>
        <Header />
        <Box>
          <form autoComplete="off" encType="multipart/form-data" onSubmit={this.handleSubmit}>
            <label htmlFor="title">
              Título
              <input type="text" name="title" onChange={this.handleInputChange} placeholder="Digite o título do meetup" />
            </label>

            <label htmlFor="description">
              Descrição
              <textarea name="description" rows="10" cols="40" onChange={this.handleInputChange} placeholder="Descreva seu meetup" />
            </label>

            <ImagesArea>
              <h4>Imagem</h4>

              <File
                className="files-dropzone"
                onChange={this.onFilesChange}
                onError={this.onFilesError}
                accepts={['image/png', 'image/jpeg']}
                maxFiles={1}
                multiple={false}
                maxFileSize={10000000}
                minFileSize={0}
                clickable
              >
                {image.length > 0 ? (
                  image.map(img => (
                    <div key={img.id}>
                      <img src={img.preview.url} alt={img.name} />
                    </div>
                  ))
                ) : (
                  <Drop><FaCamera /></Drop>
                )}
              </File>
            </ImagesArea>

            <label htmlFor="place">
              Localização
              <input type="text" name="place" onChange={this.handleInputChange} placeholder="Onde seu meetup irá acontecer?" />
            </label>

            <Preferences>
              <h4>Tema do meetup </h4>
              <div>
                <CheckBox
                  type="radio"
                  name="category"
                  value="frontend"
                  onChange={this.handleInputChange}
                />
                <span>Front-end</span>
              </div>

              <div>
                <CheckBox
                  type="radio"
                  name="category"
                  value="backend"
                  onChange={this.handleInputChange}
                />
                <span>Back-end</span>
              </div>

              <div>
                <CheckBox
                  type="radio"
                  name="category"
                  value="mobile"
                  onChange={this.handleInputChange}
                />
                <span>Mobile</span>
              </div>

              <div>
                <CheckBox
                  type="radio"
                  name="category"
                  value="devops"
                  onChange={this.handleInputChange}
                />
                <span>DevOps</span>
              </div>

              <div>
                <CheckBox
                  type="radio"
                  name="category"
                  value="gestao"
                  onChange={this.handleInputChange}
                />
                <span>Gestão</span>
              </div>

              <div>
                <CheckBox
                  type="radio"
                  name="category"
                  value="marketing"
                  onChange={this.handleInputChange}
                />
                <span>Marketing</span>
              </div>
            </Preferences>

            <Button type="submit" value="Submit">
              Salvar
            </Button>
          </form>
        </Box>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators(MeetupsActions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(NewMeetup);
