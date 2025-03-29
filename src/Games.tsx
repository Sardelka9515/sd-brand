

// 遊戲卡片組件
interface GameCardProps {
    title: string;
    description: string;
  }
  
  function GameCard({ title, description }: GameCardProps) {
    return (
      <div className="game-card">
        <div className="game-image"></div>
        <div className="game-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href="#" className="game-btn">瞭解更多</a>
        </div>
      </div>
    );
  }
  
  // 遊戲區域組件
  function Games() {
    const gamesList = [
      {
        title: "魔域迷宮",
        description: "一款極具挑戰性的地牢探險遊戲，玩家需要在無盡的迷宮中生存並找到出路。"
      },
      {
        title: "粉紅戰士",
        description: "一款動作角色扮演遊戲，玩家將在粉紅世界中面臨殘酷的戰鬥和道德抉擇。"
      },
      {
        title: "深淵之聲",
        description: "一款心理恐怖遊戲，探索人類內心最深處的恐懼，融合粉紅色的夢境與噩夢。"
      },
      {
        title: "甜蜜求生",
        description: "在糖果末日後的世界中求生存，與其他玩家競爭有限的甜蜜資源。"
      }
    ];
  
    return (
      <section id="games" className="games">
        <div className="section-container">
          <h2 className="section-title">遊戲世界</h2>
          <div className="games-grid">
            {gamesList.map((game, index) => (
              <GameCard key={index} title={game.title} description={game.description} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  
export default Games;