import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import './Dashboard.scss';
import { Assest } from '../../ReusableComponent/Assest/Assest';
import { IoMdAddCircleOutline } from 'react-icons/io';
import Modal from '../../ReusableComponent/Component/Model/Modal';

export class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      isEdit: true,
      isAddPost : false,
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
    this.setState({ data: arrData })
  }

  editTitlepost = (value, index) => {
    let arrData = [...this.state.data];
    arrData[index].title = value;
    this.setState({ data: arrData })
  }

  editBodypost = (value, index) => {
    let arrData = [...this.state.data];
    arrData[index].body = value;
    this.setState({ data: arrData })
  }

  addPost = () => {
    
    let arrData = [...this.state.data];
    let obj = {
      body: "",
      id: arrData.length,
      title: "",
      userId: 1
    }
    arrData.push(obj)
    this.setState({ data: arrData })
  }

  render() {
    return (
      <>
        <Container fluid className='dashboard'>
          <Row>
            <Col className='d-flex justify-content-start'>
              <h4>Post</h4>
            </Col>
          </Row>
          <Row className='px-5'>
            <Col className='d-flex justify-content-end'>
              <button className='universal-button' onClick={()=> this.setState({ isAddPost: !this.state.isAddPost })}><IoMdAddCircleOutline className='mb-1' /></button>
            </Col>
          </Row>
          <Row>
            {this.state.data ? this.state.data.map((item, index) =>
              <div key={item.id} className='post-container'>
                <div className='d-flex justify-content-end'>
                  <button className='universal-button' onClick={() => this.setState({ isEdit: !this.state.isEdit })} ><Assest.HiPencil /></button>
                  <button className='universal-button' onClick={() => this.deletedata(index)}><Assest.MdDelete /></button>
                </div>
                <div className='d-flex title-box justify-content-start'>
                  <div className='title-head'>
                    <h5>Title :</h5>
                  </div>
                  <div className='title-body'>
                    {this.state.isEdit ?
                      <p className='text-align'>{item.title}</p> :
                      <input
                        value={item.title}
                        onChange={(event) => this.editTitlepost(event.target.value, index)}
                        placeholder='Title' />
                    }
                  </div>
                </div>
                <div className='d-flex title-box justify-content-start'>
                  <div className='title-head'>
                    <h5>Body :</h5>
                  </div>
                  <div className='title-body'>
                    {this.state.isEdit ?
                      <p className='text-align'>{item.body}</p> :
                      <input
                        value={item.body}
                        onChange={(event) => this.editBodypost(event.target.value, index, 'title')}
                        placeholder='Body'
                      />
                    }

                  </div>
                </div>
              </div>) :
              null}
          </Row>
        </Container>
        <Modal show={this.state.isAddPost}  onClose={()=> this.setState({ isAddPost: !this.state.isAddPost })}>
        </Modal>

      </>
    )
  }
}

export default Dashboard