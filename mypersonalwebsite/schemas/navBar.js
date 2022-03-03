export default {
  name: 'navBar',
  title: 'NavBar',
  type: 'document',
  fields: [
   {
    name: 'navbarItems',
    title: 'Navbar items',
     type: 'array',
     of: [
       {
        type: 'navBarItem'
       }
     ]
   }
  ]
}