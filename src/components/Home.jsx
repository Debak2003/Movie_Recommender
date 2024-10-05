import React, { useState } from 'react';
import movie from '../components/image/movie2.jpg'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const MovieRecommender = () => {
  const [interests, setInterests] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleInputChange = (e) => {
    setInterests(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    recommendMovies(interests);
  };

  const recommendMovies = (interests) => {
    // Simple recommendation logic (replace this with actual movie data)
    const allMovies = [
    { title: 'Inception', genres: ['Sci-Fi', 'Thriller'] },
    { title: 'The Shawshank Redemption', genres: ['Drama'] },
    { title: 'The Dark Knight', genres: ['Action', 'Drama'] },
    { title: 'Pulp Fiction', genres: ['Crime', 'Drama'] },
    { title: 'The Godfather', genres: ['Crime', 'Drama'] },
    { title: 'Baasha', genres: ['Action', 'Drama'] },
    { title: 'Sivaji', genres: ['Action', 'Drama'] },
    { title: 'Anniyan', genres: ['Action', 'Thriller'] },
    { title: 'Vada Chennai', genres: ['Action', 'Drama'] },
    { title: 'Asuran', genres: ['Action', 'Drama'] },
    { title: 'Theri', genres: ['Action', 'Drama'] },
    { title: 'Master', genres: ['Action', 'Thriller'] },
    { title: '96', genres: ['Drama', 'Romance'] },
    { title: 'Kaithi', genres: ['Action', 'Thriller'] },
    { title: 'Kadal', genres: ['Drama', 'Romance'] },
    { title: 'Soorarai Pottru', genres: ['Drama', 'Biography'] },
    { title: 'Mersal', genres: ['Action', 'Drama'] },
    { title: 'Naan Ee', genres: ['Fantasy', 'Action'] },
    { title: 'Magalir Mattum', genres: ['Comedy', 'Drama'] },
    { title: 'Vikram Vedha', genres: ['Action', 'Thriller'] },
    { title: 'Arjun Reddy', genres: ['Drama', 'Romance'] },
    { title: 'Ala Vaikunthapurramuloo', genres: ['Action', 'Comedy'] },
    { title: 'Petta', genres: ['Action', 'Drama'] },
    { title: 'Dharala Prabhu', genres: ['Comedy', 'Drama'] },
    { title: 'Kadhal Kondein', genres: ['Drama', 'Romance'] },
    { title: 'Mouna Raagam', genres: ['Drama', 'Romance'] },
    { title: 'Thuppakki', genres: ['Action', 'Thriller'] },
    { title: 'Kakka Muttai', genres: ['Drama', 'Comedy'] },
    { title: 'Thani Oruvan', genres: ['Action', 'Thriller'] },
    { title: 'Ninaithale Inikkum', genres: ['Comedy', 'Musical'] },
    { title: 'Angadi Theru', genres: ['Drama', 'Romance'] },
    { title: 'Viswasam', genres: ['Action', 'Drama'] },
    { title: 'Maari', genres: ['Action', 'Comedy'] }
  ];

    const filteredMovies = allMovies.filter(movie =>
      movie.genres.some(genre => interests.toLowerCase().includes(genre.toLowerCase()))
    );

    setRecommendations(filteredMovies);
  };

  return (

    <div className="container col-xxl-8 px-4 py-5" style={{backgroundColor:"#172835"}}>
    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div className="col-10 col-sm-8 col-lg-6">
        <img src={movie} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="700" loading="lazy"/>
      </div>
      <div className="col-lg-6">
        <h1 className="display-5 fw-bold lh-1 mb-3" style={{fontFamily:'Playfair Display',color:'#8ea965'}}>Movie Recommender</h1>
        <form onSubmit={handleSubmit}>
         <input 
          type="text" class="form-control" id="exampleInputtext" aria-describedby="textHelp" p-5
          value={interests}
          onChange={handleInputChange}
          placeholder="Enter your interests (e.g. Sci-Fi, Drama)"
        />
        </form>
        <h6 style={{fontFamily:'Playfair Display',color:'#8ea965',paddingTop:'50px'}}>Search your Interested movie like (Drama,Sci-Fi,Thriller,Action,Romance,Comedy,Biography,Fantasy,Musical)</h6>
        <h2 style={{paddingTop:'10px',fontFamily:'Playfair Display',color:'#8ea965'}}>Recommendations:</h2>
       <ul style={{color:'#8ea965'}}>
         {recommendations.length > 0 ? (
          recommendations.map((movie, index) => (
            <li key={index}>{movie.title}</li>
          ))
        ) : (
          <li style={{color:'#8ea965'}}>No recommendations found.</li>
        )}
      </ul>
        
      </div>
    </div>
  </div>




  
  );
};

export default MovieRecommender;