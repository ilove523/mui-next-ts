import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Sidebar } from 'components/Sidebar';
import { pageGroups, pages } from 'components/Sidebar/SidebarData';
import TopBar from 'components/topbar/topbar';
import { withRouter } from 'next/router';
import React from 'react';

import Container from './Container';
import MainPanel from './MainPanel';
import PageProgress from './PageProgress';
import ScrollTop from './ScrollTop';
import SidebarWrapper from './SidebarWrapper';
import { PLayout, SLayout } from './types';
import Wrapper from './Wrapper';

class Layout extends React.Component<PLayout, SLayout> {
  private __scrollTopThreshold: number = 450;

  constructor(props: PLayout) {
    super(props);
    this.state = {
      rwdOpen: false,
      mini: false,
      loading: false,
      showScrollTop: false,
    };
  }

  handleToggleMini = () => {
    this.setState(prevState => ({
      rwdOpen: false,
      mini: !prevState.mini,
    }));
  };

  handleToggleRwd = () => {
    this.setState(prevState => ({
      mini: false,
      rwdOpen: !prevState.rwdOpen,
    }));
  };

  handlePageStartLoading = () => {
    this.setState({ loading: true });
  };

  handlePageEndLoading = () => {
    this.setState({ loading: false });
  };

  handleScroll: React.EventHandler<React.UIEvent<HTMLDivElement>> = event => {
    this.setState({
      showScrollTop: event.currentTarget.scrollTop >= this.__scrollTopThreshold,
    });
  };

  componentDidMount = () => {
    const { router } = this.props;
    router.events.on('routeChangeStart', this.handlePageStartLoading);
    router.events.on('routeChangeComplete', this.handlePageEndLoading);
    router.events.on('routeChangeError', this.handlePageEndLoading);
  };

  render = () => {
    const { children } = this.props;
    const { mini, rwdOpen, loading, showScrollTop } = this.state;
    return (
      <Wrapper>
        {loading && <PageProgress />}
        <SidebarWrapper>
          <Sidebar
            brand="NextJS Boilerplate"
            pages={pages}
            pageGroups={pageGroups}
            mini={mini}
            rwdOpen={rwdOpen}
            onToggleRwd={this.handleToggleRwd}
          />
        </SidebarWrapper>
        <MainPanel id="main-panel" onScroll={this.handleScroll}>
          <Container>
            <Header
              onToggleMini={this.handleToggleMini}
              onToggleRwd={this.handleToggleRwd}
            >
              <TopBar />
            </Header>
          </Container>
          <Container flex>
            {/* This is page content. */}
            {children}
          </Container>
          <Container>
            <Footer />
          </Container>
        </MainPanel>
        {showScrollTop && <ScrollTop />}
      </Wrapper>
    );
  };
}

// @ts-ignore
export default withRouter(Layout);
