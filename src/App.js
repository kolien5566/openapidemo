import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout, theme } from 'antd';
import NavHeader from './components/NavHeader.tsx';
import NavMenu from './components/NavMenu.tsx';
import Dashboard from './pages/dashboard.tsx';
import Workbench from './pages/workbench.tsx';
import Api from './pages/api.tsx';
import Quickstart from './pages/dev_docs/quickstart.tsx';
import Changelog from './pages/dev_docs/changelog.tsx';
import Terms from './pages/dev_docs/terms&policies.tsx';
import ReturnCode from './pages/dev_docs/return_code.tsx';
import CSIP from './pages/dev_docs/csip_implementation.tsx';
import VPP from './pages/dev_docs/vpp_implementation.tsx';
import Projects from './pages/resources/projects.tsx';
import Devices from './pages/resources/devices.tsx';
import Members from './pages/resources/members.tsx';
import Balance from './pages/billing/balance.tsx';
import Pricing from './pages/billing/pricing.tsx';
import BillingHistory from './pages/billing/billing_history.tsx';
import Uasge from './pages/billing/usage.tsx';
import RateLimit from './pages/billing/rate_limit.tsx';
import OrganizationName from './pages/settings/organization_name.tsx';
import SetLanguage from './pages/settings/set_language.tsx';
import SetPassword from './pages/settings/set_password.tsx';


const { Header, Content, Sider } = Layout;


const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <NavHeader
        />
        <Layout>
        <Sider
            width={250}
            style={{
              background: colorBgContainer,
              overflow: 'auto',
              marginTop: 64,
              height: 'calc(100vh - 64px)', // 假设 NavHeader 高度为 64px
              position: 'fixed',
              left: 0,
            }}
          >
            <NavMenu
            />
          </Sider>
          <Layout
            style={{
              padding: '84px 20px 10px 270px',
            }}
          >
            <Content
            >
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/workbench" element={<Workbench />} />
                <Route path="/api" element={<Api />} />
                {/* dev_docs */}
                <Route path="/quickstart" element={<Quickstart />} />
                <Route path="/changelog" element={<Changelog />} />
                <Route path="/terms&policies" element={<Terms />} />
                <Route path="/return_code" element={<ReturnCode />} />
                <Route path="/csip_implementation" element={<CSIP />} />
                <Route path="/vpp_implementation" element={<VPP />} />
                {/* resources */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/devices" element={<Devices />} />
                <Route path="/members" element={<Members />} />
                {/* billing */}
                <Route path="/balance" element={<Balance />} />
                <Route path="/billing_history" element={<BillingHistory />} />
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/usage" element={<Uasge />} />
                <Route path="/rate_limit" element={<RateLimit />} />
                {/* settings */}
                <Route path="/organization_name" element={<OrganizationName />} />
                <Route path="/set_language" element={<SetLanguage />} />
                <Route path="/set_password" element={<SetPassword />} />

              </Routes>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;