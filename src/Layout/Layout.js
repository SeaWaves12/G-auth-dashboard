
import { styled } from '@mui/material/styles';
import DashboardApp from '../Pages/DashboardApp';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = -200;
const APP_BAR_DESKTOP = -200;

const RootStyle = styled('div')({
    display: 'flex',
    minHeight: '100%',
    overflow: 'hidden'
});

const MainStyle = styled('div')(({ theme }) => ({
    flexGrow: 1,
    overflow: 'auto',
    minHeight: '100%',
    paddingTop: APP_BAR_MOBILE + 24,
    paddingBottom: theme.spacing(10),
    [theme.breakpoints.up('lg')]: {
        paddingTop: APP_BAR_DESKTOP + 24,
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    }
}));

// ----------------------------------------------------------------------

function Layout({ revenuesList}) {
    // const [open, setOpen] = useState(false);

    return (
        <RootStyle>
            <MainStyle>
                {revenuesList && <DashboardApp revenuesList={revenuesList} />}
            </MainStyle>
        </RootStyle>
    );
}
export default Layout;