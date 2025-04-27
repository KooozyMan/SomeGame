import './HealthBar.css'

export default function HealthBar ({health, maxHealth}) {
    const healthBarPercentage = (health/maxHealth) * 100;

    return (
        <div className="health-bar">
            <div className={healthBarPercentage>50 ? "health-filler" : "health-filler-low"} style={{width: `${healthBarPercentage}%`}}/>
        </div>
    );
}