import './core-team-member.scss'

const CoreTeamMember = ({image, name ,position}) =>{
    const images = {
        boxMember: process.env.PUBLIC_URL + '/images/core-team/box-member.png',
    }
    return(
        <div className="core-team-member">
            <div className="core-team-member-box"
                 style={{backgroundImage:`url(${images.boxMember})`}}>
                <img className="image-member"
                     src={image}
                     alt="member" />
                <span className="name-member">{name}</span>
            </div>
            <span className="position-member">{position}</span>
        </div>
    )
}

export default CoreTeamMember;