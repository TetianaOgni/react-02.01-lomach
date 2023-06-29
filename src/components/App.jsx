import { Component } from 'react';
import Header from './Header/Header';
import Counter from './Counter/Counter';
import ToDoList from './ToDoList/ToDoList';
import Modal from './Modal/Modal';
import Search from './Search/Search';
import ContentInfo from './ContentInfo/ContentInfo';
class App extends Component {
  state = { isShowModal: false,
    searchText: '' 
  };

  // componentDidMount(){
  //   fetch()
  // }
  // componentDidUpdate(prevProps, prevState){
  //   if (prevState !== this.state) fetch(this.state)
  // }

  showModal = () => {
    this.setState({ isShowModal: true });
  };
  closeModal = () => {
    this.setState({ isShowModal: false });
  };
  
  handleSearch=(searchText) => {
    this.setState({searchText})
  }

  render() {
    return (
      <div className="container">
        <Header showModal={this.showModal} />
        <Counter />
        <ToDoList />
        {this.state.isShowModal && (
          <Modal closeModal={this.closeModal}>Some</Modal>
        )}
        <Search handleSearch={this.handleSearch}/>
        <ContentInfo searchText={this.state.searchText}/>

      </div>
    );
  }
}
export default App;
