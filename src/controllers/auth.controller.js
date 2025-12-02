module.exports.login = (req, res) => {

  try{

  } catch (error) {
    console.error('Error in login controller:', error);
    res.status(500).send('Internal Server Error');
    return;
  }
}