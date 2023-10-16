

const Layout = () => {
    const { user } = useAuthContext();
  
    if (!user) {
      return <Stack.Screen name="Login" component={Login} />;
    }
  
    return (
      <>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Account" component={Account} />
      </>
    );
};
export default Layout