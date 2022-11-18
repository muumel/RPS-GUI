import random
import math
from detection import detect_from_img


def play():
    # get input from yolov5
    rps = detect_from_img()
    player_one = rps['user1']['class']
    player_two = rps['user2']['class']
    # player_one = random.choice(['r', 'p', 's'])
    # player_two = random.choice(['r', 'p', 's'])
    if player_one == 'None' or player_two == 'None':
        return 2, player_one, player_two
    if player_one == player_two:
        return 0, player_one, player_two

    # r > s, s > p, p > r
    if is_win(player_one, player_two):
        return 1, player_one, player_two  # Player1 is winner in this round

    return -1, player_one, player_two  # Player2 is winner in this round


def is_win(player_one, player_two):
    # winning conditions: r > s, s > p, p > r
    if (player_one == 'r' and player_two == 's') or (player_one == 's' and player_two == 'p') or (
            player_one == 'p' and player_two == 'r'):
        return True  # Player1 is winner in this round
    return False  # Player2 is winner in this round


def play_in_round(latest_score_one, latest_score_two):
    n = 3  # n = number of turn
    player_one_score = latest_score_one
    player_two_score = latest_score_two
    wins_necessary = math.ceil(n / 2)
    is_end = False
    success = False

    if player_one_score < wins_necessary and player_two_score < wins_necessary:
        winner, player_one, player_two = play()
        success = True
        # tie
        if winner == 0:
            print('It is a tie. Player1 and the Player2 have both chosen {}. \n'.format(player_one))
        # Player1 is winner
        elif winner == 2:
            print("Error detection. Please try again. \n".format(player_one))
        elif winner == 1:
            player_one_score += 1
            print('Player1 chose {} and the Player2 chose {}. Player1 win\n'.format(player_one, player_two))
        # Player2 is winner
        else:
            player_two_score += 1
            print('Player1 chose {} and the Player2 chose {}. Player2 win\n'.format(player_one, player_two))

        # someone wins best of n games which is ceil(n/2) games (ie 2/3, 3/5, 4/7)
        if (player_one_score == wins_necessary) or (player_two_score == wins_necessary):
            is_end = True  # There is the winner in this game

        # return score
        print("success: {} \nis_end: {} \nplayer_one_score: {} \nplayer_two_score: {} \nwinner: {}".format(success,
                                                                                                           is_end,
                                                                                                           player_one_score,
                                                                                                           player_two_score,
                                                                                                           winner
                                                                                                           ))
        return success, is_end, winner, player_one_score, player_two_score
    else:
        return success, 'Something wrong! Please, try again'


# if __name__ == '__main__':
#     # Player1 = Left-Player
#     # Player2 = Right-Player
#     # get latest score from GUI
#     play_in_round(0, 1)
