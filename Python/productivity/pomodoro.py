import pygame
import time
import threading

# Initialize pygame
pygame.init()

# Set up display
WIDTH, HEIGHT = 400, 300
window = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Pomodoro Clock")

# Define colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)
GREEN = (0, 255, 0)
RED = (255, 0, 0)

# Font
font = pygame.font.Font(None, 74)
small_font = pygame.font.Font(None, 36)

# Initialize mixer
pygame.mixer.init()

# Load alarm sound
ALARM_SOUND = 'alarm.mp3'

# Timer settings
WORK_TIME = 50 * 60
BREAK_TIME = 10 * 60

# Timer variables
timer = WORK_TIME
running = False
on_break = False
work_sessions_completed = 0

def play_alarm():
    pygame.mixer.music.load(ALARM_SOUND)
    pygame.mixer.music.play()

def update_timer():
    global timer, running, on_break, work_sessions_completed
    while running:
        time.sleep(1)
        if timer > 0:
            timer -= 1
        else:
            play_alarm()
            if on_break:
                timer = WORK_TIME
                on_break = False
            else:
                timer = BREAK_TIME
                on_break = True
                work_sessions_completed += 1

# Draw function
def draw():
    window.fill(WHITE)
    mins, secs = divmod(timer, 60)
    time_format = '{:02d}:{:02d}'.format(mins, secs)
    text = font.render(time_format, True, BLACK)
    window.blit(text, (WIDTH // 2 - text.get_width() // 2, HEIGHT // 2 - text.get_height() // 2))
    
    button_text = "Start Break" if on_break else "Start Work"
    button_color = GREEN if on_break else RED
    pygame.draw.rect(window, button_color, (150, 200, 100, 50))
    text = small_font.render(button_text, True, BLACK)
    window.blit(text, (WIDTH // 2 - text.get_width() // 2, 215))
    
    sessions_text = small_font.render(f"Work Sessions: {work_sessions_completed}", True, BLACK)
    window.blit(sessions_text, (10, 10))
    
    pygame.display.flip()

# Main loop
def main():
    global running
    clock = pygame.time.Clock()
    while True:
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                pygame.quit()
                return
            if event.type == pygame.MOUSEBUTTONDOWN:
                x, y = event.pos
                if 150 <= x <= 250 and 200 <= y <= 250:
                    if not running:
                        running = True
                        threading.Thread(target=update_timer).start()
        
        draw()
        clock.tick(30)

if __name__ == "__main__":
    main()



































































































    
