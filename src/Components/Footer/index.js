import { Typography } from "antd"

function AppFooter() {
    return <div className='appFooter'> 
    <Typography.Link href="https://www.google.com" target="_blank" > Privacy policy  </Typography.Link>
    <Typography.Link href="https://www.twitter.com" target="_blank" >Terms and Conditions</Typography.Link>
    <Typography.Link href="https://www.facebook.com" target="_blank" >Return policy</Typography.Link>
    <Typography.Link href="+911234567890" target="_blank" >+911234567890</Typography.Link>
    
    </div>
  }
  export default AppFooter