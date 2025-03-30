import { useState } from 'react';


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
    const allGames = [
      {
        title: "魔域迷宮",
        description: "一款極具挑戰性的地牢探險遊戲，玩家需要在無盡的迷宮中生存並找到出路。",
        category: "冒險"
      },
      {
        title: "粉紅戰士",
        description: "一款動作角色扮演遊戲，玩家將在粉紅世界中面臨殘酷的戰鬥和道德抉擇。",
        category: "動作"
      },
      {
        title: "深淵之聲",
        description: "一款心理恐怖遊戲，探索人類內心最深處的恐懼，融合粉紅色的夢境與噩夢。",
        category: "恐怖"
      },
      {
        title: "甜蜜求生",
        description: "在糖果末日後的世界中求生存，與其他玩家競爭有限的甜蜜資源。",
        category: "生存"
      }
    ];

    const [searchText, setSearchText] = useState('');
    const [filterCategory, setFilterCategory] = useState('全部');
  
    const filteredGames = allGames.filter(game => {
      const matchesSearch = game.title.includes(searchText) || game.description.includes(searchText);
      const matchesCategory = filterCategory === '全部' || game.category === filterCategory;
      return matchesSearch && matchesCategory;
    });
  

    return (
      <section id="games" className="games">
        <div className="section-container">
          <h2 className="section-title">遊戲世界</h2>

          {/* 搜尋與分類 */}
          <div style={{ marginBottom: '2rem' }}>
            <input
              type="text"
              placeholder="搜尋遊戲關鍵字..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              style={{ padding: '0.5rem', width: '60%', maxWidth: '400px', marginRight: '1rem' }}
            />

          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            style={{ padding: '0.5rem' }}
          >
            <option value="全部">全部分類</option>
            <option value="冒險">冒險</option>
            <option value="動作">動作</option>
            <option value="恐怖">恐怖</option>
            <option value="生存">生存</option>
          </select>
        </div>

        {/* 遊戲清單 */}
        <div className="games-grid">
          {filteredGames.map((game, index) => (
            <GameCard key={index} title={game.title} description={game.description} />
          ))}
          {filteredGames.length === 0 && (
            <p style={{ color: '#ccc', fontStyle: 'italic' }}>找不到符合的遊戲。</p>
          )}
        </div>
      </div>
    </section>
  );
}

  
export default Games;