import BackGround from './background'
import UserDetails from './details'
import Technologies from './technologies'
import Account from './account'
import classes from './user-profile.module.css'

const UserProfile = () => {
    return (
        <div>
            <BackGround />
            <UserDetails />
            <Technologies />
            <Account />
        </div>
    )
}

export default UserProfile
