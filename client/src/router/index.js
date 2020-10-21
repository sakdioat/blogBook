import Vue from 'vue'
import Router from 'vue-router'

//Users
import UserIndex from '@/components/Users/Index'
import UserCreate from '@/components/Users/CreateUser'
import UserEdit from '@/components/Users/EditUser'
import UserShow from '@/components/Users/ShowUser'

// Authen
import Login from '@/components/Login'

// Comments
import CommentIndex from '@/components/Comments/Index'

// Blogs
import BlogIndex from '@/components/Blogs/Index'
import BlogCreate from '@/components/Blogs/CreateBlog'
import BlogEdit from '@/components/Blogs/EditBlog'
import BlogShow from '@/components/Blogs/ShowBlog'


// Products
import ProductIndex from '@/components/Products/Index'
import ProductCreate from '@/components/Products/CreateProduct'
import ProductEdit from '@/components/Products/EditProduct'
import ProductShow from '@/components/Products/ShowProduct'
Vue.use(Router)






// Upload Testing

import Upload from '@/components/Utils/Upload'
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/Users',
      name: 'users',
      component: UserIndex
    },
    {
      path: '/user/create',
      name: 'users-create',
      component: UserCreate
    },
    {
      path: '/user/edit/:userId',
      name: 'user-edit',
      component: UserEdit
    },
    {
      path: '/user/:userId',
      name: 'user',
      component: UserShow
    },
    //authen
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    // blogs
    {
    path: '/blogs',
    name: 'blogs',
    component: BlogIndex
    },
    {
    path: '/blog/create',
    name: 'blogs-create',
    component: BlogCreate
    },
    {
    path: '/blog/edit/:blogId',
    name: 'blog-edit',
    component: BlogEdit
    },
    {
    path: '/blog/:blogId',
    name: 'blog',
    component: BlogShow
    },
    // Products
    {
      path: '/products',
      name: 'products',
      component: ProductIndex
      },
      {
      path: '/product/create',
      name: 'product-create',
      component: ProductCreate
      },
      {
      path: '/product/edit/:productId',
      name: 'product-edit',
      component: ProductEdit
      },
      {
      path: '/product/:productId',
      name: 'product',
      component: ProductShow
      },
    // comments
    {
    path: '/comments',
    name: 'comments',
    component: CommentIndex
    },
    // upload testing
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    },
  ]
})
