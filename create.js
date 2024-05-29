document.getElementById("movieForm").addEventListener("submit", async function(event) {
  event.preventDefault();

  const title = document.getElementById('Title').value;
  const imageUrl = document.getElementById('image_url').value;
  const releaseDate = document.getElementById('release_date').value;
  const description = document.getElementById('Description').value;

  const movieData = {
      title: title,
      release_date: releaseDate,
      description: description,
      image_url: imageUrl
  };

  try {
      const response = await axios.post('http://localhost:3000/createMovie', movieData);

      if (response.status === 201) {
          alert('Movie added successfully');
          window.location.href = 'index.html'; // Redirect to the desired page
      } else {
          alert(`Error: ${response.data.error}`);
      }
  } catch (error) {
      console.error('Error adding movie:', error);
      alert('Error adding movie. Please try again.');
  }
});
