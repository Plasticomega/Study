import pygame
from random import randint

#general setup 
pygame.init()
WINDOW_WIDTH, WINDOW_HEIGHT = 640,480
display_surface = pygame.display.set_mode((WINDOW_WIDTH, WINDOW_HEIGHT))
running = True
pygame.display.set_caption('Pussygang')
clock = pygame.time.Clock()
#surface

surf = pygame.Surface((100,100))
surf.fill('white')

# importing an image

player_surf = pygame.image.load('images/player.png').convert_alpha()
star_surf = pygame.image.load('images/star.png').convert_alpha()
star_postions = [(randint(0,WINDOW_WIDTH),randint(0,WINDOW_HEIGHT)) for i in range (20)]
player_rect = player_surf.get_rect(bottomright = (WINDOW_WIDTH-10,WINDOW_HEIGHT-10))
meteor_surf = pygame.image.load('images/meteor.png').convert_alpha()
meteor_rect = meteor_surf.get_rect(center = (WINDOW_WIDTH/2,WINDOW_HEIGHT/2))
laser_surf = pygame.image.load('images/laser.png').convert_alpha()
laser_rect = laser_surf.get_rect(bottomleft = (20,WINDOW_HEIGHT-20))

player_direction = 1

while running:
    #event loop
    clock.tick(120)
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False



    #draw the game
    display_surface.fill('black')
    for pos in star_postions:
        display_surface.blit(star_surf,pos)  

    player_rect.x += player_direction * 1
    if player_rect.right > WINDOW_WIDTH or player_rect.left<0:
        player_direction *= -1
    
    display_surface.blit(meteor_surf,meteor_rect)
    display_surface.blit(laser_surf,laser_rect)
    
 
    display_surface.blit(player_surf,player_rect)
    
    
    
    
    
    
    pygame.display.update()


  


pygame.quit()