import React from "react";
import "./App.css";
import axios from "axios";

class FavoriteMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      poster: null,
      comment: null,
    };
    this.onChange = this.onChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  submitForm(e) {
    const url = "https://post-a-form.herokuapp.com/api/movies";
    e.preventDefault();
    axios
      .post(url, this.state)
      .then((res) => res.data)
      .then((res) => {
        alert(`Ajout du film ${res.id} !`);
      })
      .catch((e) => {
        console.error(e);
        alert(`Erreur lors de l'ajout du film : ${e.message}`);
      });
  }

  render() {
    return (
      <div className="FavoriteMovie">
        <h1>Saisie du film</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Informations</legend>
            <div className="form-data">
              <label htmlFor="title">Nom</label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>

            <div className="form-data">
              <label htmlFor="poster">URL poster</label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>

            <div className="form-data">
              <label htmlFor="comment">Commentaire</label>
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="10"
                placeholder="Votre commentaire"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input type="submit" value="Envoyer" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}

export default FavoriteMovie;
