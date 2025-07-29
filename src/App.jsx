import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Slider from '@mui/material/Slider';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Paper from '@mui/material/Paper';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [sliderValue, setSliderValue] = useState(30);
  const [radioValue, setRadioValue] = useState('option1');
  const [tabValue, setTabValue] = useState(0);
  const [selectValue, setSelectValue] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
  };

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleSelectChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setEmailError(!e.target.value.includes('@') || !e.target.value.includes('.'));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(e.target.value.length < 6);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = email.includes('@') && email.includes('.');
    const isPasswordValid = password.length >= 6;
    setEmailError(!isEmailValid);
    setPasswordError(!isPasswordValid);

    if (isEmailValid && isPasswordValid) {
      alert('Form submitted! (Just kidding, no backend here yet.)');
      // In a real app, you'd send this to a backend
    } else {
      alert('Please fix the form errors, you magnificent failure.');
    }
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#90caf9' : '#3f51b5',
      },
      secondary: {
        main: darkMode ? '#f48fb1' : '#ff4081',
      },
      background: {
        default: darkMode ? '#121212' : '#f0f2f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
    },
    typography: {
      h4: {
        fontWeight: 700,
      },
      body1: {
        fontSize: '1.1rem',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <motion.div 
        className="min-h-screen flex flex-col items-center p-4"
        style={{ 
          background: darkMode 
            ? 'linear-gradient(to bottom right, #1a1a1a, #0a0a0a)' 
            : 'linear-gradient(to bottom right, #e0e7ff, #c3dafe)' 
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <AppBar position="static" color="transparent" elevation={0} className="mb-8">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Dummy menu button
            </Typography>
            <FormControlLabel
              control={
                <Switch 
                  checked={darkMode} 
                  onChange={handleThemeChange} 
                  color="primary" 
                  icon={<Brightness7Icon />} 
                  checkedIcon={<Brightness4Icon />} 
                />
              }
              label={darkMode ? "Dark Mode" : "Light Mode"}
              className={darkMode ? "text-gray-300" : "text-gray-700"}
            />
          </Toolbar>
        </AppBar>

        <Container maxWidth="md">
          <motion.div 
            className="rounded-xl shadow-2xl p-8 space-y-6 border"
            style={{ 
              backgroundColor: theme.palette.background.paper,
              borderColor: darkMode ? '#333' : '#e0e0e0'
            }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom 
              className="text-center font-bold"
              color="primary"
            >
              <motion.span
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
              >
                Material UI Showcase
              </motion.span>
            </Typography>

            <Typography variant="body1" className="text-center space-y-6" color="text.secondary">
              Basic example using Material UI components with Framer Motion animations.
            </Typography>
            <br/>
            <Paper elevation={3} sx={{ borderRadius: '12px', overflow: 'hidden' }}>
              <Tabs value={tabValue} onChange={handleTabChange} centered>
                <Tab label="Basic Inputs" />
                <Tab label="More Controls" />
                <Tab label="Form Validation" />
              </Tabs>
              <TabPanel value={tabValue} index={0}>
                <Box className="space-y-6">
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Button variant="contained" color="primary" fullWidth>
                      Primary Button
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <Button variant="outlined" color="secondary" fullWidth>
                      Secondary Button
                    </Button>
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <TextField 
                      label="Your Name" 
                      variant="outlined" 
                      fullWidth 
                      placeholder="Enter something... or don't."
                      color="primary"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    <FormControlLabel 
                      control={<Checkbox defaultChecked color="primary" />} 
                      label="Agree to absolutely everything" 
                      className={darkMode ? "text-gray-300" : "text-gray-700"}
                    />
                  </motion.div>
                </Box>
              </TabPanel>
              <TabPanel value={tabValue} index={1}>
                <Box className="space-y-6">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <Typography gutterBottom className={darkMode ? "text-gray-300" : "text-gray-700"}>
                      Slider Value: {sliderValue}
                    </Typography>
                    <Slider 
                      value={sliderValue} 
                      onChange={handleSliderChange} 
                      aria-labelledby="continuous-slider" 
                      color="primary"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <FormControl component="fieldset" fullWidth>
                      <FormLabel component="legend" className={darkMode ? "text-gray-300" : "text-gray-700"}>
                        Choose Wisely
                      </FormLabel>
                      <RadioGroup 
                        aria-label="options" 
                        name="options" 
                        value={radioValue} 
                        onChange={handleRadioChange}
                      >
                        <FormControlLabel 
                          value="option1" 
                          control={<Radio color="primary" />} 
                          label="Option 1 (The Obvious Choice)" 
                          className={darkMode ? "text-gray-300" : "text-gray-700"}
                        />
                        <FormControlLabel 
                          value="option2" 
                          control={<Radio color="primary" />} 
                          label="Option 2 (For the Rebellious)" 
                          className={darkMode ? "text-gray-300" : "text-gray-700"}
                        />
                      </RadioGroup>
                    </FormControl>
                  </motion.div>

                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <FormControl fullWidth>
                      <InputLabel id="select-label">Pick a Destiny</InputLabel>
                      <Select
                        labelId="select-label"
                        value={selectValue}
                        label="Pick a Destiny"
                        onChange={handleSelectChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Destiny A</MenuItem>
                        <MenuItem value={20}>Destiny B</MenuItem>
                        <MenuItem value={30}>Destiny C</MenuItem>
                      </Select>
                    </FormControl>
                  </motion.div>
                </Box>
              </TabPanel>
              <TabPanel value={tabValue} index={2}>
                <Box component="form" onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                  >
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth
                      value={email}
                      onChange={handleEmailChange}
                      error={emailError}
                      helperText={emailError ? "A valid email is required, genius." : ""}
                      color="primary"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.7 }}
                  >
                    <TextField
                      label="Password"
                      type="password"
                      variant="outlined"
                      fullWidth
                      value={password}
                      onChange={handlePasswordChange}
                      error={passwordError}
                      helperText={passwordError ? "Password must be at least 6 characters long, try harder." : ""}
                      color="primary"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Submit (If You Dare)
                    </Button>
                  </motion.div>
                </Box>
              </TabPanel>
            </Paper>

            <motion.div
              className="text-center pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <Typography variant="caption" color="text.secondary">
                Simple demo
              </Typography>
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>
    </ThemeProvider>
  );
}