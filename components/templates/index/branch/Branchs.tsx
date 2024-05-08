import Branch from "./Branch"

const Branchs = () => {
    return (
        <div className="container max-w-screen-xl m-auto">
            <h4 className="text-base sm:text-2xl font-bold text-center text-neutral-900 mt-12 mb-3 md:mb-6">ترخینه گردی</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-3 gap-x-6">
                <Branch img="/images/branch_1.png" title="شعبه اکباتان" description="شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم"/>
                <Branch img="/images/branch_2.png" title="شعبه چالوس" description="چالوس، خیابان ۱۷ شهریور، بعد کوچه کوروش، جنب داروخانه دکتر میلانی"/>
                <Branch img="/images/branch_1.png" title="شعبه اقدسیه" description="خیابان اقدسیه ، نرسیده به میدان خیام، پلاک ۸"/>
                <Branch img="/images/branch_2.png" title="شعبه ونک" description="میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶"/>
            </div>
        </div>
    )
}

export default Branchs