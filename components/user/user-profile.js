import BackGround from './background'
import UserDetails from './details'
import Technologies from './technologies'
import Account from './account'

import classes from './user.module.css'

const UserProfile = () => {
    return (
        <div className={classes.section}>
            <BackGround />
            <UserDetails />
            <Technologies />
            <Account />
        </div>
    )
}

export default UserProfile
