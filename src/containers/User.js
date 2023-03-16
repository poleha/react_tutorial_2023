import React from 'react'
import PropTypes from 'prop-types'
import {handleLogin} from "../actions/UserActions";
import {connect} from "react-redux";

class User extends React.Component {
  renderTemplate = () => {
    const { name, error, isFetching } = this.props.user

    if (error) {
      return <p>Во время запроса произошла ошибка, обновите страницу</p>
    }

    if (isFetching) {
      return <p>Загружаю...</p>
    }

    if (name) {
      return <p>Привет, {name}!</p>
    } else {
      return (
        <button className="btn" onClick={this.props.handleLoginAction}>
          Войти
        </button>
      )
    }
  }
  render() {
    return <div className="ib user">{this.renderTemplate()}</div>
  }
}


const mapStateToProps = store => {
  return {
    user: store.user, // вытащили из стора (из редьюсера user все в переменную thid.props.user)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleLoginAction: () => dispatch(handleLogin()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User)