export default function checkHealth(obj) {
    let healthy;
    if (obj.health > 50) {
      healthy = "healthy";
      return healthy;
    } if (obj.health >= 15 && obj.health <= 50) {
      healthy = "wounded";
      return healthy;
    } if (obj.health < 15 && obj.health >= 0) {
      healthy = "critical";
      return healthy;
    }
  }