import React from 'react'

function Compatibility() {
    const compImg=[
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/mailchimp.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/campaing-monitor.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/klaviyo.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/hubspot.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/moosend.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/sendgrid.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/sendinblue.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/activecampaign.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/mailerlite.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/saleforce.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/sendfox.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/constant-contact.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/aweber.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/benchmark.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/convertkit.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/emailoctopus.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/freshmail.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/campainer.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/dotdigital.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/emma.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/icontact.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/interspire.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/mailgun.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/mailijet.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/marketo.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/sendpulse.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/sendy.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/verticalresponse.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/madmimi.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/phplist.png"},
        {img:"https://www.psd2newsletters.com/wp-content/uploads/2021/01/generic.png"},
    ]
  return (
    <div className='container grid-imgs py-6'>
        <h2 className= 'dm-mono-regular t-large t-bold t-align-center t-padding-v capitalize'>{"my templates compatibility"}</h2>
        <p className='dm-mono-regular t-medium t-align-center'>{"our email templates are compatible with Mailchimp, Campaign Monitor + 28 Email Service Providers. Simply build integrate our email template to your preferred Email Service Provider."}</p>
            {compImg.map((e,index)=>{
                return (
                  <img key={index} src={e.img} alt='compatible-ESP-image' className="w-[80px]"/>
                )
            })}

        
        </div>
  )
}

export default Compatibility