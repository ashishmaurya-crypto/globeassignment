import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './Dashboard.scss';
import { Assest } from '../../ReusableComponent/Assest/Assest';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Modal from '../../ReusableComponent/Component/Model/Modal';


class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isEditID: "",
      isAddPost: false,
      setTitle: "",
      setBody: "",
    }

  }
  componentDidMount() {
    this.getdata()
  }

  getdata = () => {
    const url = 'https://jsonplaceholder.typicode.com/users/1/posts?id=1&id=2'
    axios.get(url).then((response) => {
      console.log('result', response.data);
      this.setState({ data: response.data })
    }).catch((err) => {
      console.log(err)
    })

  }

  deletedata = (index) => {
    let arrData = [...this.state.data];
    arrData.splice(index, 1)
    this.setState({ data: arrData }, () => {
      console.log(this.state.data)
    })
  }

  addPost = () => {
    let arrData = [...this.state.data];
    let ID = arrData.length ? (arrData[arrData.length - 1].id + 1) : (arrData.length + 1);
    let obj = {
      body: this.state.setBody,
      id: ID,
      title: this.state.setTitle,
      userId: 1
    }
    arrData.push(obj)
    this.setState({ data: arrData }, () => {
      this.clearState()
    })
  }

  clearState = () => {
    alert('Saved');
    this.setState({ setBody: "", setTitle: "", isAddPost: !this.state.isAddPost })
  }

  render() {
    return (
      <>
        <Container fluid className='dashboard'>
          <Row>
            <Col className='d-flex justify-content-start'>
              <h4>Home</h4>
            </Col>
          </Row>
          <Row className='px-5'>
            <Col className='d-flex justify-content-end'>
              <button className='universal-button' onClick={() => this.setState({ isAddPost: !this.state.isAddPost })}><IoMdAddCircleOutline className='mb-1' /></button>
            </Col>
          </Row>
          <Row>
            {this.state.data.length ? this.state.data.map((item, index) =>
              <div key={item.id} className='post-container'>
                <div className='d-flex justify-content-end'>
                  <button className='universal-button' onClick={() => this.setState({ isEditID: item.id })} >{this.state.isEditID === item.id ? <Assest.EditPencil /> : <Assest.HiPencil />}</button>
                  <button className='universal-button' onClick={() => this.deletedata(index)}><Assest.MdDelete /></button>
                </div>
                <div className='d-flex title-box justify-content-start'>
                  <div className='title-head'>
                    <h5>Title :</h5>
                  </div>
                  <div className='title-body'>
                    {this.state.isEditID === item.id ?
                      <input
                        value={item.title}
                        onChange={(event) => this.editTitlepost(event.target.value, index)}
                        placeholder='Title' /> :
                      <p className='text-align'>{item.title}</p>
                    }
                  </div>
                </div>
                <div className='d-flex title-box justify-content-start'>
                  <div className='title-head'>
                    <h5>Body :</h5>
                  </div>
                  <div className='title-body'>
                    {this.state.isEditID === item.id ?
                      <textarea
                        value={item.body}
                        onChange={(event) => this.editBodypost(event.target.value, index, 'title')}
                        placeholder='Body'
                      /> :
                      <p className='text-align'>{item.body}</p>
                    }
                  </div>
                </div>
                <div>
                  {this.state.isEditID === item.id ? <button className='save-btn' onClick={()=> this.setState({ isEditID: "" })}>Save</button> : null}
                </div>
              </div>) :
              <h1>No Data Available</h1>}
          </Row>
        </Container>
        <Modal show={this.state.isAddPost} onClose={() => this.setState({ isAddPost: !this.state.isAddPost })}>
          <Container className='create-post-container'>
            <Row className='mt-4'>
              <Col className='d-flex justify-content-start'>
                <span className='d-flex align-items-center cursor'><FaLongArrowAltLeft onClick={() => this.setState({ isAddPost: !this.state.isAddPost })} /></span>
                <span className='mx-2'><h4 className='mt-2'> Create Post</h4></span>
              </Col>
            </Row>
            <Row>
              <div className='edit-input'>
                <>
                  <label className='labal'>Title</label>
                  <input
                    className='email-input'
                    value={this.state.setTitle}
                    placeholder='eg. post name'
                    onChange={(event) => this.setState({ setTitle: event.target.value })}
                  />
                  <label className='labal'>Body</label>
                  <textarea
                    className='email-input'
                    value={this.state.setBody}
                    placeholder='eg. sunt aut facere repellat provident occaecati'
                    onChange={(event) => this.setState({ setBody: event.target.value })}
                  />
                </>
                <button
                  className='add-btn'
                  onClick={() => this.addPost()}>
                  <IoMdAddCircleOutline />Create Post
                </button>
              </div>
            </Row>
          </Container>
        </Modal>
      </>
    )
  }

  editTitlepost = (value, index) => {
    let arrData = [...this.state.data];
    arrData[index].title = value;
    this.setState({ data: arrData }, () => {
      console.log(this.state.data)
    })
  }

  editBodypost = (value, index) => {
    let arrData = [...this.state.data];
    arrData[index].body = value;
    this.setState({ data: arrData }, () => {
      console.log(this.state.data)
    })
  }
}


export default (Dashboard);