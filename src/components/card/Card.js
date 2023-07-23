import React from 'react'
import './card.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import { orange, red } from '@mui/material/colors';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';



const data = [
  {name: 'Page A', uv: 400, pv: 2400, amt: 2400},
  {name: 'Page B', uv: 200, pv: 1400, amt: 1400},
  {name: 'Page C', uv: 300, pv: 3400, amt: 3400},
  {name: 'Page d', uv: 100, pv: 3400, amt: 3400},
  {name: 'Page e', uv: 250, pv: 3400, amt: 3400},
  {name: 'Page f', uv: 50, pv: 3400, amt: 3400},
  {name: 'Page g', uv: 345, pv: 3400, amt: 3400},

];

function Card({repo}){
  const [changes, setChanges] = React.useState('');
  const handleChange = (event) => {
    setChanges(event.target.value);
  };
  const renderLineChart = (
    <ResponsiveContainer className='linechart'  width="100%" height={300}>
      <LineChart  data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
  return (    
      <Accordion className='card'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {/* <Typography>Accordion 1</Typography> */}
          <div className='cardInfo'>
            <div className='cardInfo_image'>
              <img src={repo.owner.avatar_url} alt='profile_img'/>
            </div>
            <div className='cardInfo_summ'>
         
              <div className='repo_name'>{repo.full_name}</div>
              <div className='repo_des'>{repo.description ??= repo.full_name}</div>
              <div className='cardInfo_more_summ'>
                <div className='cardInfo_more_summ_icon'><StarIcon sx={{ color: orange[500] }}/> {repo.stargazers_count}</div>
                <div className='cardInfo_more_summ_icon'><ReportProblemIcon sx={{ color: red[600] }}/> {repo.open_issues_count}</div>
                <div className='cardInfo_more_summ_last_push'>Last Pushed <span className='last_push_time'>{repo.updated_at}</span> by <span className='ownername'>{repo.owner.login}</span></div>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {/* <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography> */}
          <div className='cardInfo_details'>
            <div className='cardInfo_details_tabs'>
              <h3>Total Changes</h3>
              <FormControl className='cardInfo_details_dropdown' sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-autowidth-label">Changes</InputLabel>
                <Select
                  labelId="demo-simple-select-autowidth-label"
                  id="demo-simple-select-autowidth"
                  value={changes}
                  onChange={handleChange}
                  autoWidth
                  label="Change"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Commits</MenuItem>
                  <MenuItem value={21}>Additions</MenuItem>
                  <MenuItem value={22}>Deletions</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div>
              {renderLineChart}
            </div>
            <div>
              <h3>Contributor Changes</h3>
              <div>
                {renderLineChart}
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
   
  )
}

export default Card