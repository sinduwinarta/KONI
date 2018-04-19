<?php

function trendingTags()
{
    $trending_tags = App\Hashtag::orderBy('count', 'desc')->get();

    if (count($trending_tags) > 0) {
        if (count($trending_tags) > (int) Setting::get('min_items_page', 3)) {
            $trending_tags = $trending_tags->random((int) Setting::get('min_items_page', 3));
        }
    } else {
        $trending_tags = '';
    }

    return $trending_tags;
}

function suggestedUsers()
{
    $suggested_users = App\User::whereNotIn('id', Auth::user()->following()->get()->lists('id'))->where('id', '!=', Auth::user()->id)->get();

    if (count($suggested_users) > 0) {
        if (count($suggested_users) > (int) Setting::get('min_items_page', 3)) {
            $suggested_users = $suggested_users->random((int) Setting::get('min_items_page', 3));
        }
    } else {
        $suggested_users = '';
    }

    return $suggested_users;
}
