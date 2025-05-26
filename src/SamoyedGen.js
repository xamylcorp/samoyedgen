import React, { useState, useEffect } from 'react';

const CorgiGenerator = () => {
  const [corgiImage, setCorgiImage] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCorgiImage = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breed/samoyed/images/random');
      const data = await response.json();
      setCorgiImage(data.message);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCorgiImage();
  }, []);

  return (
    <div className="corgi-generator">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <img src={corgiImage} alt="Corgi" />
      )}
      <br />
      <button onClick={fetchCorgiImage}>Fetch!</button>
      <p>Made with love by xam</p>
    </div>
  );
};

export default CorgiGenerator;
