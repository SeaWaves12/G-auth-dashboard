import React from 'react'
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
import AppCurrentVisits  from "../Component/Dashboard/AppCurrentVisits";
import AppWebsiteVisits from "../Component/Dashboard/AppWebsiteVisits";
import { green, red, purple, grey, yellow } from '@mui/material/colors';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

// ----------------------------------------------------------------------
export default function DashboardApp(props) {
    const theme = useTheme();
    const [country, setCountry] = React.useState('');
    const [month, setMonth] = React.useState('');
    const [countryList, setCountryList] = React.useState();

    const [chartData, setChartData] = React.useState('');
    const [chartData2, setChartData2] = React.useState('');

    const handleChange = (event) => {
        setCountry(event.target.value);
        props.revenuesList.length > 0 && myRevenueBar(event.target.value)
    };

    const handleChange2 = (event) => {
        setMonth(event.target.value);
        props.revenuesList.length > 0 && myMOnthlyRevenue(event.target.value)
    };


    const myMOnthlyRevenue = (myCountry) => {
        let myItemList = [];
        var myList = props.revenuesList.filter(item => item.Country === myCountry)
        console.log(myList)
        myList.map((item) => {
            let myItem = {}
            myItem.label = item.Company;
            myItem.value = (item.revenue.Jan + item.revenue.Feb + item.revenue.Mar + item.revenue.Apr + item.revenue.May + item.revenue.Jun + item.revenue.Jul + item.revenue.Aug + item.revenue.Sep + item.revenue.Oct + item.revenue.Nov + item.revenue.Dec);
            myItemList.push(myItem);
        })
        console.log( myItemList)
        setChartData2(myItemList)
    }
    

    const myRevenueBar = (myCountry) => {
        let myItemList = [];
        var myList = props.revenuesList.filter(item => item.Country === myCountry)
        console.log(myList)
        myList.map((item, idx) => {
            let myItem = {}
            myItem.name = item.Company;
            myItem.type = idx === 0 ? 'column' : "line";
            myItem.fill = 'solid'
            myItem.data = [item.revenue.Jan, item.revenue.Feb, item.revenue.Mar, item.revenue.Apr, item.revenue.May, item.revenue.Jun, item.revenue.Jul, item.revenue.Aug, item.revenue.Sep, item.revenue.Oct, item.revenue.Nov, item.revenue.Dec];
            myItemList.push(myItem);
        })
        console.log(props.revenuesList, myItemList)
        setChartData(myItemList)
    }

    const countrylistHandler = () => {
        const unique_list = [];
        props.revenuesList.length>0 && props.revenuesList.forEach(item => {
            if (unique_list.indexOf(item.Country) === -1) {
                unique_list.push(item.Country);
            }
        });
        setCountryList(unique_list)
    }


    
    React.useEffect(() => {
        countrylistHandler()
    },[])

    return (
        // <Page title="Dashboard">
        <Container maxWidth="xl">
            <Typography variant="h4" sx={{ mb: 5 }}>
                Hi, Welcome back
            </Typography>

            <Grid container spacing={3}>

                <Grid item xs={12} md={6} lg={8}>
                    <div>
                        Select a country for Country wise revenue of company.
                    </div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={country}
                            label="country"
                            onChange={handleChange}
                        >
                            {countryList && countryList.map((item, idx) =>
                                <MenuItem key={idx} value={item}>{item}</MenuItem>)}
                        </Select>
                    </FormControl>

                    {chartData.length>0 && <AppWebsiteVisits
                        title="Country wise revenue of company:"
                        chartLabels={[
                            '01/01/2003',
                            '02/01/2003',
                            '03/01/2003',
                            '04/01/2003',
                            '05/01/2003',
                            '06/01/2003',
                            '07/01/2003',
                            '08/01/2003',
                            '09/01/2003',
                            '10/01/2003',
                            '11/01/2003',
                            '12/01/2003'
                        ]}
                        chartData={chartData}
                    />}
                </Grid>

                <Grid item xs={12} md={6} lg={4}>
                    <div>
                        Select a country.
                    </div>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-simple-select-label">Country</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={month}
                            label="month"
                            onChange={handleChange2}
                        >
                            {countryList && countryList.map((item, idx) =>
                                <MenuItem key={idx} value={item}>{item}</MenuItem>)}
                        </Select>
                    </FormControl>
                    {chartData2 && chartData2.length>0 &&
                    <AppCurrentVisits
                        title="Monthly share"
                        chartData={chartData2}
                        chartColors={[
                            theme.palette.primary.main,
                            red[500],
                            purple[500],
                            yellow[500],
                            green[500],
                            grey[500]
                        ]}
                    />}
                </Grid>
            </Grid>
        </Container>
    );
}