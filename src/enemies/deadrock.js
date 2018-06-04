Quintus.Deadrock = function(Q) {

    Q.Sprite.extend('Deadrock', {
        init: function(p) {
            this._super(p, {
                sheet: 'deadrockWalk',
                sprite: 'deadrockAnim',
                hp: 1,
                type: Q.SPRITE_ENEMY,
                invulnerabilityTime: 1,
                invulnerability: false,
            });
            this.add('defaultEnemy');
            this.on('getHit', 'getHit');
            this.on('dead', 'dead');
        },
        step: function(dt) {

            this.play('walk_left_foot');

            if (this.p.invulnerabilityTime <= 0) {
                this.p.invulnerabilityTime = 1;
                this.p.invulnerability = false;
                this.animate({ 'opacity': 1 }, 1);
            } else {
                var opacity = (this.p.invulnerability == 1 ? 0 : 1);
                this.p.invulnerabilityTime -= dt;
                this.animate({ 'opacity': opacity }, 0);
            }
        },
        getHit: function() {
            if (!this.p.invulnerability) {
                this.p.invulnerability = true;
                this.p.invulnerabilityTime = 1;
                this.p.hp--;
                if (this.p.hp == 0) {
                    this.trigger('dead');
                }

            }
        },
        dead: function() {
            console.log("deadrock dead");
        }
    });

    Q.animations('deadrockAnim', {
        walk_left_foot: { frames: [0, 1], rate: 1 / 10, loop: true },
        walk_rigth_foot: { frames: [0, 1], flip: true, rate: 1 / 10, loop: true }
    });
};