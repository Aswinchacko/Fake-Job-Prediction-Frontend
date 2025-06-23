async function checkScam() {
    const data = {
      title: document.getElementById('title').value,
      company_profile: document.getElementById('company_profile').value,
      description: document.getElementById('description').value,
      requirements: document.getElementById('requirements').value
    };
  
    try {
      const response = await axios.post('https://job-scam-api.onrender.com/predict', data);
      document.getElementById('result').textContent = response.data.message;
    } catch (error) {
      document.getElementById('result').textContent = '❌ API Error. Check console.';
      console.error(error);
    }
  }
  