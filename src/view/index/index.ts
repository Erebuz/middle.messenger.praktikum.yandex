import '~src/static/style.scss'

const template = `
<ul>
    <li>
        <a href="login.html">Login</a>
    </li>
    
    <li>
        <a href="registration.html">Registration</a>
    </li>
    
    <li>
        <a href="general.html">General</a>
    </li>    
    <li>
        <a href="404.html">404</a>
    </li>    
    <li>
        <a href="500.html">500</a>
    </li>
    
</ul>`

document.querySelector('#root').insertAdjacentHTML('beforeend', template)
