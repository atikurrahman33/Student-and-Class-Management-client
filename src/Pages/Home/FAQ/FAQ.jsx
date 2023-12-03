
const FAQ = () => {
    return (
        <div>
            <div className='thumb'>
            <h1 className="text-4xl font-bold text-center  mb-4 text-cyan-600">FAQ'S</h1>
            </div>
            <div className="faqs w-10/12 mx-auto my-12">
                <div tabIndex={0} className="mt-4 collapse collapse-plus border border-base-300 bg-base-100 rounded">
                    <div className="collapse-title font-semibold">
                        How to Login in this website?
                    </div>
                    <div className="collapse-content">
                        <p className='mt-6'>You can this website using google and email and password.</p>
                    </div>
                </div>
                <div tabIndex={0} className="mt-4 collapse collapse-plus border border-base-300 bg-base-100 rounded">
                    <div className="collapse-title  font-semibold">
                       What types of website is this?
                    </div>
                    <div className="collapse-content">
                        <p>This website for all people who dose not earn money, to provide good food to his/ her family.This a social service website. We help poor people.</p>
                    </div>
                </div>
                <div tabIndex={0} className="mt-4 collapse collapse-plus border border-base-300 bg-base-100 rounded">
                    <div className="collapse-title  font-semibold">
                        How can I contact with your company?
                    </div>
                    <div className="collapse-content">
                        <p>You can send message our contact section. Otherwise you can send email (ashraful.islam0871@gmail.com) here.</p>
                    </div>
                </div>
                <div tabIndex={0} className="mt-4 collapse collapse-plus border border-base-300 bg-base-100 rounded">
                    <div className="collapse-title  font-semibold">
                        Have any support?
                    </div>
                    <div className="collapse-content">
                        <p>Yes. We provide services 24/7 .</p>
                    </div>
                </div>
                <div tabIndex={0} className="mt-4 collapse collapse-plus border border-base-300 bg-base-100 rounded">
                    <div className="collapse-title  font-semibold">
                        Why I choose your website?
                    </div>
                    <div className="collapse-content">
                        <p>You choose this side for your kindness.Because your wast food help poor people.Poor people eat one day good food</p>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default FAQ;